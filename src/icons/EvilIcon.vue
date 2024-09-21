
<template>
  <Icon :iconName="'evil'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EvilIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'evil'
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
