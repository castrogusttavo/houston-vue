
<template>
  <Icon :iconName="'copyright'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CopyrightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'copyright'
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
