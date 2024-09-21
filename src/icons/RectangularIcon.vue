
<template>
  <Icon :iconName="'rectangular'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RectangularIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rectangular'
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
