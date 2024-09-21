
<template>
  <Icon :iconName="'pexels'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PexelsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pexels'
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
