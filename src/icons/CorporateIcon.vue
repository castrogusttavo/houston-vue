
<template>
  <Icon :iconName="'corporate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CorporateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'corporate'
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
