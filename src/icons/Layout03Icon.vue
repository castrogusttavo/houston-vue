
<template>
  <Icon :iconName="'layout-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-03'
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
