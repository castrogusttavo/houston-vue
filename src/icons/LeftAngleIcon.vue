
<template>
  <Icon :iconName="'left-angle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftAngleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-angle'
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
