
<template>
  <Icon :iconName="'dropper'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DropperIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dropper'
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
