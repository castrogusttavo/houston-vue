
<template>
  <Icon :iconName="'waste'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WasteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waste'
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
