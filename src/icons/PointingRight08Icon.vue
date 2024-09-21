
<template>
  <Icon :iconName="'pointing-right-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingRight08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-right-08'
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
