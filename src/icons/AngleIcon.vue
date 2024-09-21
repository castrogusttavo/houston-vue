
<template>
  <Icon :iconName="'angle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AngleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'angle'
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
