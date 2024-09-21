
<template>
  <Icon :iconName="'keffiyeh'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeffiyehIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keffiyeh'
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
