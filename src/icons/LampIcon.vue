
<template>
  <Icon :iconName="'lamp'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LampIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lamp'
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
