
<template>
  <Icon :iconName="'mosque-location'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MosqueLocationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mosque-location'
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
