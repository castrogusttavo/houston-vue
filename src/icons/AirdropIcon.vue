
<template>
  <Icon :iconName="'airdrop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirdropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airdrop'
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
