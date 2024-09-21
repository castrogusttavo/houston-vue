
<template>
  <Icon :iconName="'cap-projecting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CapProjectingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cap-projecting'
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
