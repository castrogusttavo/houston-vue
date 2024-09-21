
<template>
  <Icon :iconName="'steering'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SteeringIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'steering'
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
