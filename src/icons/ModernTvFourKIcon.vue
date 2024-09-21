
<template>
  <Icon :iconName="'modern-tv-4-k'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ModernTvFourKIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'modern-tv-4-k'
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
