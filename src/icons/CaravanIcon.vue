
<template>
  <Icon :iconName="'caravan'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CaravanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'caravan'
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
