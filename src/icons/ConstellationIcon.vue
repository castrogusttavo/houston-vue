
<template>
  <Icon :iconName="'constellation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ConstellationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'constellation'
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
