
<template>
  <Icon :iconName="'unlink-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Unlink03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unlink-03'
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
