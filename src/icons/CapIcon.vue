
<template>
  <Icon :iconName="'cap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cap'
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
