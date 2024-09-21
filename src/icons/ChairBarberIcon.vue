
<template>
  <Icon :iconName="'chair-barber'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChairBarberIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chair-barber'
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
