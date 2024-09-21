
<template>
  <Icon :iconName="'right-angle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RightAngleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'right-angle'
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
