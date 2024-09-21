
<template>
  <Icon :iconName="'smart-ac'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartAcIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-ac'
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
