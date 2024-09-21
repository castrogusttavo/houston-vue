
<template>
  <Icon :iconName="'pointing-right-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingRight05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-right-05'
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
