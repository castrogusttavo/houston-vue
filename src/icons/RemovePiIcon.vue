
<template>
  <Icon :iconName="'remove-pi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RemovePiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'remove-pi'
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
