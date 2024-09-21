
<template>
  <Icon :iconName="'purse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PurseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'purse'
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
