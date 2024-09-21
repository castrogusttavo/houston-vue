
<template>
  <Icon :iconName="'option'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OptionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'option'
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
