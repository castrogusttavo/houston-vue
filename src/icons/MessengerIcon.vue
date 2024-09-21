
<template>
  <Icon :iconName="'messenger'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessengerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'messenger'
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
