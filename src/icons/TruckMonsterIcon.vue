
<template>
  <Icon :iconName="'truck-monster'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TruckMonsterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'truck-monster'
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
