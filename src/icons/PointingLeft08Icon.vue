
<template>
  <Icon :iconName="'pointing-left-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingLeft08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-left-08'
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
