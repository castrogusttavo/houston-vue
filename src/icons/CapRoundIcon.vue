
<template>
  <Icon :iconName="'cap-round'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CapRoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cap-round'
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
