
<template>
  <Icon :iconName="'pointing-left-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingLeft04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-left-04'
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
