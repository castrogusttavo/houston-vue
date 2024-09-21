
<template>
  <Icon :iconName="'hand-pointing-down-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandPointingDown03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-pointing-down-03'
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
