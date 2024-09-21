<template>
  <div  v-html="svgContent"></div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'default-icon',
      required: true
    },
    iconSize: {
      type: Number,
      default: 24,
      required: false
    },
    fillType: {
      type: String,
      default: 'stroke',
      validator(value) {
       return ['stroke', 'solid', 'bulk', 'duotone', 'twotone'].includes(value)
      }, 
      required: false
    },
    cornerStyle: {
      type: String,
      default: 'rounded',
      validator(value) {
       return ['sharp', 'rounded', 'standard'].includes(value)
      }, 
      required: false
    },
    color: {
      type: String,
      default: '#000000',
      required: false
    }
  },
  data() {
    return {
      svgContent: ''
    }
  },
  watch: {
    iconName: 'loadIcon',
    iconSize: 'loadIcon',
    fillType: 'loadIcon',
    cornerStyle: 'loadIcon',
    color: 'loadIcon'
  },
  mounted() {
    this.loadIcon();
  },
  methods: {
    loadIcon() {
      const iconUrl = `https://cdn.hugeicons.com/icons/${this.iconName}-${this.fillType}-${this.cornerStyle}.svg`

      fetch(iconUrl)
        .then(response => response.text())
        .then(svgText => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
          const svgNode = svgDoc.documentElement;

          svgNode.setAttribute('width', this.iconSize.toString());
          svgNode.setAttribute('height', this.iconSize.toString());
          svgNode.setAttribute('fill', this.color);

          svgNode.querySelectorAll('*').forEach(element => {
            if (element.hasAttribute('fill')) {
              element.setAttribute('fill', this.color);
            }
            if (element.hasAttribute('stroke')) {
              element.setAttribute('stroke', this.color);
            }
          });

          this.svgContent = svgNode.outerHTML;
        })
        .catch(error => {
          console.error('Error loading icon:', error);
          this.svgContent = '';
        })
    }
  }
};
</script>