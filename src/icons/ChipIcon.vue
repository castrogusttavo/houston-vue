
<template>
  <Icon :iconName="'chip'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chip'
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
