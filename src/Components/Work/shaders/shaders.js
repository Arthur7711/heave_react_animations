export const vertexShader = `
  precision mediump float;
  // default mandatory variables
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  
  // our texture matrices
  // displacement texture does not need to use them
  uniform mat4 firstTextureMatrix;
  uniform mat4 secondTextureMatrix;
  
  // custom variables
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  varying vec2 vFirstTextureCoord;
  varying vec2 vSecondTextureCoord;
  
  // custom uniforms
  uniform float uTransitionTimer;
  
  void main() {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

    // varyings
    // use original texture coords for our displacement
    vTextureCoord = aTextureCoord;
    // use texture matrices for our videos
    vFirstTextureCoord = (firstTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
    vSecondTextureCoord = (secondTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
      vVertexPosition = aVertexPosition;
  }
`;

export const fragmentShader = `
  precision mediump float;
  
  // Linear interpolate center across center half of the image
  // Transition from https://gl-transitions.com/editor/CrossZoom
  // License: MIT
  // Author: rectalogic
  // ported by gre from https://gist.github.com/rectalogic/b86b90161503a0023231
  
  // Converted from https://github.com/rectalogic/rendermix-basic-effects/blob/master/assets/com/rendermix/CrossZoom/CrossZoom.frag
  // Which is based on https://github.com/evanw/glfx.js/blob/master/src/filters/blur/zoomblur.js
  // With additional easing functions from https://github.com/rectalogic/rendermix-basic-effects/blob/master/assets/com/rendermix/Easing/Easing.glsllib
  
  precision mediump float;
  
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  varying vec2 vFirstTextureCoord;
  varying vec2 vSecondTextureCoord;
  
  // custom uniforms
  uniform float uTransitionTimer;
  uniform float uTimer;
  uniform float uTo;
  uniform float uFrom;
  uniform float uFadeIn;
  
  // our textures samplers
  // notice how it matches our data-sampler attributes
  uniform sampler2D firstTexture;
  uniform sampler2D secondTexture;
  uniform sampler2D thirdTexture;
  uniform sampler2D texture4;
  uniform sampler2D texture5;
  uniform sampler2D texture6;
  uniform sampler2D texture7;
  uniform sampler2D texture8;
  uniform sampler2D texture9;
  uniform sampler2D texture10;
  uniform sampler2D texture11;
  uniform sampler2D texture12;
  uniform sampler2D texture13;
  uniform sampler2D texture14;
  uniform sampler2D texture15;
  uniform sampler2D texture16;
  uniform sampler2D texture17;
  uniform sampler2D texture18;
  uniform sampler2D texture19;
  uniform sampler2D texture20;
  uniform sampler2D texture21;
  uniform sampler2D displacement;
  uniform sampler2D textures[100];
  
  float strength = 0.4; // = 0.4
  
  const float PI = 3.141592653589793;
  
  float Linear_ease(in float begin, in float change, in float duration, in float time) {
      return change * time / duration + begin;
  }
  
  float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {
      if (time == 0.0)
          return begin;
      else if (time == duration)
          return begin + change;
      time = time / (duration / 2.0);
      if (time < 1.0)
          return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;
      return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;
  }
  
  float Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {
      return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;
  }
  
  float rand (vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }
  
  
  
  vec4 getTextureByIndex(float index, vec2 vUv){
      vec4 result;
      if(index==0.0){
          result = texture2D(firstTexture,vUv);
      }
      if(index==1.0){
          result = texture2D(secondTexture,vUv);
      }
      if(index==2.0){
          result = texture2D(thirdTexture,vUv);
      }
      if(index==3.0){
          result = texture2D(texture4,vUv);
      }
      if(index==4.0){
          result = texture2D(texture5,vUv);
      }
      if(index==5.0){
          result = texture2D(texture6,vUv);
      }
      if(index==6.0){
          result = texture2D(texture7,vUv);
      }
      if(index==7.0){
          result = texture2D(texture8,vUv);
      }
      if(index==8.0){
          result = texture2D(texture9,vUv);
      }
      if(index==9.0){
          result = texture2D(texture10,vUv);
      }
      if(index==10.0){
          result = texture2D(texture11,vUv);
      }
      if(index==11.0){
          result = texture2D(texture12,vUv);
      }
      if(index==12.0){
          result = texture2D(texture13,vUv);
      }
      if(index==13.0){
          result = texture2D(texture14,vUv);
      }
      if(index==14.0){
          result = texture2D(texture15,vUv);
      }
      if(index==15.0){
          result = texture2D(texture16,vUv);
      }
      if(index==16.0){
          result = texture2D(texture16,vUv);
      }
      if(index==17.0){
          result = texture2D(texture16,vUv);
      }
      if(index==18.0){
          result = texture2D(texture16,vUv);
      }
      if(index==19.0){
          result = texture2D(texture16,vUv);
      }
      if(index==20.0){
          result = texture2D(texture16,vUv);
      }
      
      return result;
  }
  vec3 crossFade(in vec2 uv, in float dissolve, in float t1,in  float t2) {
      return mix(getTextureByIndex(t1,uv).rgb, getTextureByIndex(t2,uv).rgb, dissolve);
  }
  void main() {
  
      float progress = fract(uTransitionTimer);
      float currentTexture = uFrom;
      float nextTexture =  uTo;
  
      vec4 current = getTextureByIndex(uFrom, vFirstTextureCoord);
      vec4 next = getTextureByIndex(uTo, vFirstTextureCoord);
      float mask = step(vTextureCoord.y,uFadeIn);
  
  
      vec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);
      float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);
  
      // Mirrored sinusoidal loop. 0->strength then strength->0
      float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);
  
      vec3 color = vec3(0.0);
      float total = 0.0;
      vec2 toCenter = center - vFirstTextureCoord;
  
      /* randomize the lookup values to hide the fixed number of samples */
      float offset = rand(vFirstTextureCoord);
  
      for (float t = 0.0; t <= 40.0; t++) {
          float percent = (t + offset) / 40.0;
          float weight = 4.0 * (percent - percent * percent);
          color += crossFade(vFirstTextureCoord + toCenter * percent * strength, dissolve, currentTexture,nextTexture) * weight;
          total += weight;
      }
  
      gl_FragColor = vec4(color / total, 1.0);
      gl_FragColor = mix(vec4(0.,0.,0.,0),gl_FragColor, mask);
  }
`;
