
<template>
  <Icon :iconName="'unsplash'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UnsplashIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unsplash'
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
