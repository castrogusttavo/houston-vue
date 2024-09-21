
<template>
  <Icon :iconName="'eiffel-tower'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EiffelTowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eiffel-tower'
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
