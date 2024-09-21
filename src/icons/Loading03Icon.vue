
<template>
  <Icon :iconName="'loading-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Loading03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'loading-03'
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
