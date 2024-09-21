
<template>
  <Icon :iconName="'pointing-right-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingRight03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-right-03'
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
