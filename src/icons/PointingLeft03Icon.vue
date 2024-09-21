
<template>
  <Icon :iconName="'pointing-left-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingLeft03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-left-03'
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
