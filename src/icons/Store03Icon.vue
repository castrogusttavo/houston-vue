
<template>
  <Icon :iconName="'store-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Store03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-03'
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
