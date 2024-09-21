
<template>
  <Icon :iconName="'shapes'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShapesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shapes'
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
