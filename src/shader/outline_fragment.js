const fragmentShader = `
  varying vec2 vUv;
  uniform float thickness;

  float edgeFactor(vec2 p){
    vec2 grid = abs(fract(p - 0.5) - 0.5) / fwidth(p) / thickness;
    return min(grid.x, grid.y);
  }

  void main() {
    float a = edgeFactor(vUv);
    vec3 c = mix(vec3(0), vec3(1), a);
    gl_FragColor = vec4(c, 1.0);
  }
`;

export default fragmentShader;
