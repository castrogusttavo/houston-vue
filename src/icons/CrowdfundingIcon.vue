
<template>
  <Icon :iconName="'crowdfunding'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CrowdfundingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'crowdfunding'
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
