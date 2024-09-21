
<template>
  <Icon :iconName="'microsoft-admin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MicrosoftAdminIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'microsoft-admin'
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
