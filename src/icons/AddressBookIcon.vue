
<template>
  <Icon :iconName="'address-book'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AddressBookIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'address-book'
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
