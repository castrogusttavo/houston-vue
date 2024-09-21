
<template>
  <Icon :iconName="'affiliate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AffiliateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'affiliate'
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
