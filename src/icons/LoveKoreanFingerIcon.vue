
<template>
  <Icon :iconName="'love-korean-finger'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoveKoreanFingerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'love-korean-finger'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
