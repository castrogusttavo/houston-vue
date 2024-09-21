
<template>
  <Icon :iconName="'al-aqsa-mosque'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlAqsaMosqueIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'al-aqsa-mosque'
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
