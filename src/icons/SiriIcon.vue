
<template>
  <Icon :iconName="'siri'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SiriIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'siri'
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
